import Image from "next/image";
import Link from "next/link";

export default function Ct02_40() {
  return (
    <>
      <section className="py-100 ct-02 content-section division">
        <div className="container">
          {/* SECTION CONTENT (ROW) */}
          <div className="row d-flex align-items-center">
            {/* IMAGE BLOCK */}
            <div className="col-md-6">
              <div className="img-block left-column wow fadeInRight">
                <Image
                  className="img-fluid"
                  src="/images/img-07.png"
                  alt="content-image"
                />
              </div>
            </div>
            {/* TEXT BLOCK */}
            <div className="col-md-6">
              <div className="txt-block right-column wow fadeInLeft">
                {/* Section ID */}
                <span className="section-id">Built-In Automation</span>
                {/* Title */}
                <h2 className="s-46 w-700">
                  Achieve more with better workflows
                </h2>
                {/* Text */}
                <p>
                  Sodales tempor sapien quaerat ipsum undo congue laoreet turpis
                  neque auctor turpis vitae dolor luctus placerat magna and
                  ligula cursus purus vitae purus an ipsum suscipit
                </p>
                {/* List */}
                <ul className="simple-list">
                  <li className="list-item">
                    <p>
                      Sapien quaerat tempor an ipsum laoreet purus and sapien
                      dolor an ultrice ipsum aliquam undo congue cursus dolor
                    </p>
                  </li>
                  <li className="list-item">
                    <p className="mb-0">
                      Purus suscipit cursus vitae cubilia magnis volute egestas
                      vitae sapien turpis ultrice auctor congue magna placerat
                    </p>
                  </li>
                </ul>
                {/* Link */}
                <div className="txt-block-tra-link mt-25">
                  <Link
                    href="#integrations-1"
                    className="tra-link ico-20 color--theme"
                  >
                    All-in-one platform <span className="flaticon-next" />
                  </Link>
                </div>
              </div>
            </div>{" "}
            {/* END TEXT BLOCK */}
          </div>{" "}
          {/* END SECTION CONTENT (ROW) */}
        </div>{" "}
        {/* End container */}
      </section>
    </>
  );
}
