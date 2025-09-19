import React from 'react'
import "./FileList.scss"
const FileList = () => {
    return (
        <ul className='file-list'>
            <li>
                <h3>샘플 이미지</h3>
                <div className="img-wrap">
                    <img src="https://ky-s3-crud2-0915.s3.ap-northeast-2.amazonaws.com/uploads/1758102294189-JaKGvm-test.png" alt="image" />
                </div>
                <p>설명 샘플 입니다.</p>
                <div className="btn-wrap">

                    <a className='open-btn' href="https://ky-s3-crud2-0915.s3.ap-northeast-2.amazonaws.com/uploads/1758102294189-JaKGvm-test.png">
                        Open</a>
                    <button className='delete-btn'>Delete</button>
                </div>
            </li>
            <li>
                <h3>샘플 이미지</h3>
                <div className="img-wrap">
                    <img src="https://ky-s3-crud2-0915.s3.ap-northeast-2.amazonaws.com/uploads/1758102294189-JaKGvm-test.png" alt="image" />
                </div>
                <p>설명 샘플 입니다.</p>
                <div className="btn-wrap">

                    <a className='open-btn' href="https://ky-s3-crud2-0915.s3.ap-northeast-2.amazonaws.com/uploads/1758102294189-JaKGvm-test.png">
                        Open</a>
                    <button className='delete-btn'>Delete</button>
                </div>
            </li>
            <li>
                <h3>샘플 이미지</h3>
                <div className="img-wrap">
                    <img src="https://ky-s3-crud2-0915.s3.ap-northeast-2.amazonaws.com/uploads/1758102294189-JaKGvm-test.png" alt="image" />
                </div>
                <p>설명 샘플 입니다.</p>
                <div className="btn-wrap">

                    <a className='open-btn' href="https://ky-s3-crud2-0915.s3.ap-northeast-2.amazonaws.com/uploads/1758102294189-JaKGvm-test.png">
                        Open</a>
                    <button className='delete-btn'>Delete</button>
                </div>
            </li>
        </ul>
    )
}

export default FileList