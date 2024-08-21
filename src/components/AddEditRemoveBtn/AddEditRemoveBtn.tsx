import { SpeedDial, SpeedDialAction, SpeedDialIcon } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';

const actions = [
    { icon: <AddIcon />, name: 'Add' },
    { icon: <EditIcon />, name: 'Edit' },
    { icon: <DeleteIcon />, name: 'Remove' },
];

type AddEditRemoveBtnProps = {
    setOpenAddModal: any
    setOpenEditModal: any
    setOpenRemoveModal: any
}


export default function AddEditRemoveBtn({setOpenAddModal,setOpenEditModal,setOpenRemoveModal}:AddEditRemoveBtnProps) {
    
    function actionBtn(func: string) {
        if (func == "Add") {
            setOpenAddModal(true);
        }
        if (func == "Edit") {
            setOpenEditModal(true);
        }
        if (func == "Remove"){
            setOpenRemoveModal(true);
        }
    }
 
    return (
        <>
            <div className="fixed right-4 bottom-28">
                <SpeedDial
                    ariaLabel="SpeedDial basic example"
                    sx={{ position: 'absolute', bottom: 16, right: 16 }}
                    icon={<SpeedDialIcon />}
                >
                    {actions.map((action) => (
                        <SpeedDialAction
                            key={action.name}
                            icon={action.icon}
                            tooltipTitle={action.name}
                            onClick={() => actionBtn(action.name)}>
                        </SpeedDialAction>
                    ))}
                </SpeedDial>
            </div>
        </>
    )
}