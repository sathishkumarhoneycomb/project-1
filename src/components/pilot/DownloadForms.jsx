
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload} from "@fortawesome/free-solid-svg-icons";





const DownloadForms = () => {
    return (
        <section>
            <header className="mb-5">
                <div className="card rounded-0">
                    <h4 className="text-center text-success py-3 text-uppercase"> Download Forms </h4>
                </div>
            </header>

            <div className="">
                <span className="d-block text-muted mb-3"> 👇 Click on the button below to download your form </span>
                <button className="btn btn-outline-primary rounded-0 d-flex align-items-center gap-2 text-uppercase"> Claim Form 
                <FontAwesomeIcon icon={faDownload} />
                </button>
            </div>

        </section>
    );
}

export default DownloadForms;
