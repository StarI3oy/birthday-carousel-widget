import PropTypes, {InferProps} from "prop-types";

function EmployeeCard({avatar, name, date}: InferProps<typeof EmployeeCard.propTypes>) {

    return (
        <></>
    );
}


EmployeeCard.propTypes = {
    avatar: PropTypes.string || null,
    name: PropTypes.any,
    date: PropTypes.string
};

export default EmployeeCard;
