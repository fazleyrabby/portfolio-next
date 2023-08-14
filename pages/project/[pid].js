import { useRouter } from "next/router"

const Project = () => {
    const router = useRouter()
    const { pid } = router.query
    return (
        <>
            Project: { pid }
        </>
    )
}

export default Project