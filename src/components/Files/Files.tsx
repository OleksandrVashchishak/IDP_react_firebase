import FileItem from './FileItem';
import { storage } from '../../firebase';
import { ref, uploadBytesResumable, getDownloadURL, listAll } from "firebase/storage";
import React from 'react'
import { IFile } from '../../models/IFile';

type IProps = {
    userId: string | null,
}

const Files = ({ userId }: IProps) => {
    const [files, setFiles] = React.useState<IFile[]>([])
    const [percent, setPercent] = React.useState<number>(0)

    const getFiles = () => {
        listAll(listRef).then((res) => {
            setFiles(res.items)
        }).catch((error) => {
            console.log(error)
        });
    }

    const listRef = ref(storage, `/${userId}`)
    const hundleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            const file = e.target.files[0]
            const storageFileRef = ref(storage, `/${userId}/${file.name}`)
            const uploadTask = uploadBytesResumable(storageFileRef, file);
            uploadTask.on("state_changed", (snapshot) => {
                setPercent(Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100));
            }, (err) => console.log(err), () => {
                getDownloadURL(uploadTask.snapshot.ref).then((url) => {
                    console.log(url);
                    getFiles()
                });
            }
            );
        }
    }

    React.useEffect(() => {
        getFiles()
    }, [userId])
    return (
        <div data-testid="files-root">
            <h2 >Download file </h2>
            <input type="file" onChange={(e) => hundleFile(e)} />
            <div className='percents' >
                <div className='percents-fill' style={{ width: `${percent}%` }}></div>
                <span>{percent}%</span>
            </div>
            <h2>Files</h2>  <br />
            {files && files.map((file) => (
                <FileItem key={file.name} file={file} getFiles={getFiles} />
            ))}
        </div>
    );
}

export default Files;
