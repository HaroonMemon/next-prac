'use clients'

export default function Lecture({params}){
    console.log(params)
    return(
        <div>
            <h1> day of college {params.lecture[0]}</h1>
            <h1>lecture no. {params.lecture[1]}</h1>
        </div>
    )
}