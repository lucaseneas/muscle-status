import { Box, CircularProgress } from "@mui/material";

export default function Loading() {
    return (
        <>
            <div className=" absolute left-0 top-1/2 w-screen">
                <Box className="flex items-center justify-center" sx={{ display: 'flex' }}>
                    <CircularProgress />
                </Box>
            </div>
        </>
    )
}