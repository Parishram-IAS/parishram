import React, { useState, Fragment } from "react";
import { Form, Table } from "semantic-ui-react";
import XLS from "xlsx";
import { dateFormatForInputTag } from "../../../utils/date";

const excelDataColumns = {
  QUESTION: "question",
  OPTION_1: "option1",
  OPTION_2: "option2",
  OPTION_3: "option3",
  OPTION_4: "option4",
  CORRECT_OPTION: "correct option",
};

const AddQuestion = () => {
  const [selectedDate, setSelectedDate] = useState(dateFormatForInputTag(new Date()));
  const [uploadedQuestions, setUploadedQuestions] = useState([]);

  const handleDateChange = (event) => {
    const { value } = event.target;
    console.log("Date", value);
    setSelectedDate(value);
  };

  const handleInputFileChange = (event) => {
    // Get The File From The Input
    var selectedFile = event.target.files[0];
    // Create A File Reader HTML5
    var reader = new FileReader();
    // Ready The Event For When A File Gets Selected
    reader.onload = function (e) {
      var data = e.target.result;
      var workbook = XLS.read(data, { type: "binary" });

      workbook.SheetNames.forEach(function (sheetName) {
        var jsOutput = XLS.utils.sheet_to_row_object_array(workbook.Sheets[sheetName]);
        console.log(jsOutput);
        setUploadedQuestions(jsOutput);
      });
    };

    // Tell JS To Start Reading The File.. You could delay this if desired
    reader.readAsBinaryString(selectedFile);
  };

  const renderUploadedQuestions = () => {
    if (uploadedQuestions && uploadedQuestions.length > 0) {
      console.log("uploadedQuestions", uploadedQuestions);
      return (
        <Fragment>
          {" "}
          <label>Uploaded Questions</label>
          <Table celled>
            <Table.Header>
              <Table.Row>
                {Object.values(excelDataColumns).map((column) => (
                  <Table.HeaderCell key={column}>{column.toUpperCase()}</Table.HeaderCell>
                ))}
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {uploadedQuestions.map((question) => (
                <Table.Row key={question[excelDataColumns.QUESTION]}>
                  <Table.Cell>{question[excelDataColumns.QUESTION]}</Table.Cell>
                  <Table.Cell>{question[excelDataColumns.OPTION_1]}</Table.Cell>
                  <Table.Cell>{question[excelDataColumns.OPTION_2]}</Table.Cell>
                  <Table.Cell>{question[excelDataColumns.OPTION_3]}</Table.Cell>
                  <Table.Cell>{question[excelDataColumns.OPTION_4]}</Table.Cell>
                  <Table.Cell>{question[excelDataColumns.CORRECT_OPTION]}</Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
        </Fragment>
      );
    }
    return null;
  };

  return (
    <Form>
      <Form.Field>
        <label>Select Date</label>
        <input type="date" value={selectedDate} onChange={handleDateChange} />
      </Form.Field>
      <Form.Field>
        <label>Upload Questions</label>
        <Form.Input
          type="file"
          accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
          onChange={handleInputFileChange}
        />
      </Form.Field>

      {renderUploadedQuestions()}
    </Form>
  );
};

export default AddQuestion;
