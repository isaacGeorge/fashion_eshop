export const getItemImage= (item)=>{
    const itimage = item?.attributes?.image?.data?.attributes?.formats?.medium?.url;
    return `http://${import.meta.env.PUBLIC_BACKEND || "localhost"}:${import.meta.env.PUBLIC_BACKEND_PORT}` + itimage
}