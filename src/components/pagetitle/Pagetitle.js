import * as React from "react" 
import pagetitleStyles from "./pagetitle.module.scss"

const Pagetitle = ({title}) => {
  return (
    <div className={pagetitleStyles.container}>
   <h2 className={pagetitleStyles.title}>{title}</h2>
    </div>
  )
}

export default Pagetitle