import style from './BtnContainer.module.css'
import BackBtn from '../BackBtn/BackBtn'
import LoadingSubmitBtn from '../LoadingSubmitBtn/LoadingSubmitBtn'

export default function BtnContainer(props){

    return (
    <div className={style.btnContainer}>
        <BackBtn  text={props.backText} onClick={props.backOnClick} />  
        <LoadingSubmitBtn loading={props.submitLoading} text={props.submitText} /> 
    </div>
    )
}