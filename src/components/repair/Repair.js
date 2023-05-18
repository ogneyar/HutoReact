//

import './Repair.css'


const Repair = (props) => {

    return (
        <div className={props.minimal ? "Repair" : "Repair Repair_maxHeight"}>
            <div className="Repair_box">
                <div className="Repair_boxTitle">
                    <h1>СЕРВИСНОЕ ОБСЛУЖИВАНИЕ САЙТА</h1>
                </div>
                <div className="Repair_boxBody">
                    <h3>Сайт на ремонте, зайдите позднее....</h3>
                </div>
            </div>
        </div>
    )
}

export default Repair
