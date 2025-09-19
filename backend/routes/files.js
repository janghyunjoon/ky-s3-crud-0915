import { Router } from "express";
import { nanoid } from "nanoid";
import FileItem from '../models/FileItem.js'
import {
    presignGet,
    presignPut,
    deleteObject
} from '../src/s3.js'

const router = Router()


router.post('/presign', async (req, res) => {
    try {
        const { filename, contentType } = req.body
        if (!filename || !contentType) {
            return res.status(400).json({ message: "filename/contentType은 필수 입니다." })
        }

        const key = `uploads/${Date.now()}-${nanoid(6)}-${filename}`

        const url = await presignPut(key, contentType)

        res.json({ url, key })

    } catch (error) {
        console.error(error)
        res.status(500).json({ error: "프리사인드 url 생성 실패" })
    }
})

router.post('/', async (req, res) => {
    try {

        const {
            key,
            originalName,
            contentType,
            size,
            title = "",
            description = ""
        } = req.body

        const doc = await FileItem.create({
            key,
            originalName,
            contentType,
            size,
            title,
            description
        })
        res.status(201).json({ message: "S3 메타데이터 저장 완료", doc })

    } catch (error) {
        console.error('메타데이터 저장 에러', error)
        res.status(500).json({ error: "S3 메타데이터 저장 실패" })
    }
})
router.get('/', async (req, res) => {
    try {

        const items = await FileItem.find().sort({ createdAt: -1 }).lean()

        const out = await Promise.all(
            items.map(async (it) => ({
                ...it,
                url: await presignGet(it.key, 300)
            }))
        )

        res.status(201).json({ message: "S3 메타데이터 가져오기", out })

    } catch (error) {
        console.error('메타데이터 저장 에러', error)
        res.status(500).json({ error: "S3 메타데이터 저장 실패" })
    }
})
router.get('/:id', async (req, res) => {
    try {

        const it = await FileItem.findById(req.params.id).lean()

        if (!it) return res.sendStatus(404)

        it.url = await presignGet(it.key, 300)

        res.status(201).json({ message: "S3 메타데이터 단건 가져오기", it })

    } catch (error) {
        console.error('메타데이터 저장 에러', error)
        res.status(500).json({ error: "S3 메타데이터 저장 실패" })
    }
})

router.patch('/:id', async (req, res) => {
    try {

        const { title, description } = req.body
        const it = await FileItem.findByIdAndUpdate(
            req.params.id,
            { title, description },
            { new: true }
        )

        if (!it) return res.sendStatus(404)



        res.status(201).json({ message: "S3 메타데이터 수정하기성공", it })

    } catch (error) {
        console.error('메타데이터 저장 에러', error)
        res.status(500).json({ error: "S3 메타데이터 저장 실패" })
    }
})

router.delete('/:id', async (req, res) => {
    try {


        const it = await FileItem.findByIdAndDelete(req.params.id)

        if (!it) return res.sendStatus(404)

            await deleteObject(it.key)
            await it.deleteOne()

        res.status(201).json({ message: "파일 삭제 완료",id: req.params.id })

    } catch (error) {
        console.error('파일 삭제 에러', error)
        res.status(500).json({ error: "S3 파일 삭제 실패" })
    }
})




export default router