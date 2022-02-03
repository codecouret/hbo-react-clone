const Hubs = (props) => {
   
    return(
        <div className="hubs">
            <h3 className="hubs__title">HBO Max Hubs</h3>
            <div className="hubs__thumbnails">
                <div className="hubs__btns">
                    <div className="hubs__btn-row">
                        <button><a href="#"><img src="img/hbo.png"/></a></button>            
                        <button><a href="#"><img src="img/Max_Originals.png"/></a></button>            
                        <button><a href="#"><img src="img/DCP.png"/></a></button>            
                        <button><a href="#"><img src="img/TCM-logo.png"/></a></button>            
                        <button><a href="#">Adult swim</a></button>            
                    </div>
                    <div className="hubs__btn-row">
                        <button><a href="#">my</a></button>            
                        <button><a href="#">CN</a></button>            
                        <button><a href="#">SESAME Workshop</a></button>            
                        <button><a href="#">Luney tunes</a></button>            
                        <button><a href="#">Marvel</a></button>                      
                    </div>
                </div>
           </div>
        </div>
    )
}

export default Hubs