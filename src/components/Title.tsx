interface TitleProps  {
    title : string
}
function Title({title}:TitleProps){
    return(
        <h1 className="text-center text-3xl pt-12 pb-7">{title}</h1>
    )
}
export default Title