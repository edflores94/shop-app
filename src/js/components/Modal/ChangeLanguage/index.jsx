import React, { useState } from "react";
import { withStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogContent from "@material-ui/core/DialogContent";
import RadioButton from "components/Form/RadioButton/RadioButton";
import styles from "./ChangeLanguage.scss";

const DialogContent = withStyles(theme => ({
  root: {
    padding: theme.spacing(2)
  }
}))(MuiDialogContent);

const languages = [
  { title: "Spanish - ES", value: "es" },
  { title: "English - EN", value: "en" }//,
  //{ title: "Portuguese - PT", value: "pt" },
  //{ title: "Deutsch - DE", value: "de" }
];

export default function SaveModal(props) {
  const [modalLangs, setModalLangs] = useState(languages);

  return (
    <div className={styles.mainDiv}>
      <Dialog onClose={props.handleClose} aria-labelledby="customized-dialog-title" open={true}>
        <DialogContent dividers>
          <RadioButton language={props.language} options={modalLangs} handleChange={props.handleChange} />
        </DialogContent>
      </Dialog>
    </div>
  );
}
