function Student(props) {
    return (
        <div>
            <h2>Student Details</h2>
            <p>Name: {props.name}</p>
            <p>Course: {props.course}</p>
        </div>
    );
}

export default Student;
