import React from "react";

export default function ErrorBox(errorCheck) {
  return (
    <div>
      <div style={{ marginTop: "20px", marginLeft: "15vw", width: "70vw" }}>
        <div className="mr-auto alert alert-warning alert-dismissible fade show" role="alert">
          Woops, looks like either your email or password was invalid
          <button
            type="button"
            className="close"
            onClick={errorCheck}
            data-dismiss="alert"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
      </div>
    </div>
  );
}
