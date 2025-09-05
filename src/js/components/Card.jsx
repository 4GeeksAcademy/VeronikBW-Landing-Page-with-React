

const Card = (props) => {
    return (
        <div className="col-12 col-md-6 col-lg-3 ">
            <div className="card my-3">
                <img src="https://picsum.photos/500/325" className="card-img-top" alt="Random image" />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text"> {props.textLorem} </p>
                </div>
                <div className="card-footer">
                    <button type="button" className="btn btn-primary">Find Out More!</button>
                </div>
            </div>
        </div>
    )
}

export default Card