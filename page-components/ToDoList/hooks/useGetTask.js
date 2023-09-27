function useGetTask() {

    const getTask = async()=>{
        try{
            const resp = await fetch('/api/task',{
                method: 'GET',
            })
            const list = await resp.json()
            console.log(list, 'list')
        }catch(err){
            console.log(err,'err')
        }
    }

    return {
        getTask
    }
}

export default useGetTask