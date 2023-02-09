import React from 'react'
import { storage } from '../../firebase';
import { ref, deleteObject, getDownloadURL } from "firebase/storage";
import { IFile } from '../../models/IFile';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import FolderIcon from '@mui/icons-material/Folder';
import DeleteIcon from '@mui/icons-material/Delete';
import CloudDownloadOutlinedIcon from '@mui/icons-material/CloudDownloadOutlined';


type IProps = {
    file: IFile,
    getFiles: () => void
}

const FileItem = ({ file, getFiles }: IProps) => {
    const [url, setUrl] = React.useState('')
    React.useEffect(() => {
        getDownloadURL(ref(storage, file.fullPath))
            .then((url) => setUrl(url))
            .catch((error) => console.log(error));
    }, [])

    const onRemove = (filePath:string) => {
        const refer = ref(storage, filePath);
        deleteObject(refer).then(() => {
            console.log('removed')
            getFiles()
        }).catch((error) => {
            console.log(error)
        });
    }

    const onDownload = () => {
        // download
    }
    return (
        <div>
            <List >
                <ListItem secondaryAction={<>
                    <IconButton onClick={() => onDownload()} edge="end" aria-label="delete"><CloudDownloadOutlinedIcon /></IconButton>
                    <IconButton onClick={() => onRemove(file.fullPath)} edge="end" aria-label="delete"><DeleteIcon /></IconButton>
                </>}>
                    <ListItemAvatar>
                        <Avatar sx={{ width: 50, height: 50 }} src={url && url}>
                            {!url && <FolderIcon />}
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={file.name} secondary={'secod'} />
                </ListItem>,
            </List>
        </div>
    );
}

export default FileItem;