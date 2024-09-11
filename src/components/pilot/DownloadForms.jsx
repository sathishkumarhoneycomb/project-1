
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
                <p> Click on the button below to download your form </p>
                <button className="btn border-primary rounded-0 p-2 text-uppercase text-primary d-flex align-items-center gap-2"> Claim Form 
                <FontAwesomeIcon icon={faDownload} />
                </button>
            </div>

        </section>
    );
}

export default DownloadForms;
