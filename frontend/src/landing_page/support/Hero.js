import React from "react";

function Hero() {
    return (
        <div className="container-fluid" id="supportHero">
            <div
                className="p-4"
                id="supportRow"
            >
                <h3 className="fs-2 fw-bold">Support Portal</h3>
                <button
                    className="btn btn-primary"
                    style={{ padding: "10px 25px", fontSize: "17px" }}
                >
                    My tickets
                </button>
            </div>
            <div className="d-flex justify-content-center mb-5">
                <input
                    type="text"
                    className="form-control"
                    placeholder="   🔍   Eg: How do I open my account, How do I activate F&O..."
                    id="searchBox"
                />
            </div>
        </div>
    );
}

export default Hero;
