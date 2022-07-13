import { Field, ErrorMessage } from 'formik';
import { Fragment } from 'react';

const Select = (props) => {
    const { name, options, ...rest } = props;
    return (
        <Fragment>
            <Field as="select" name={name} {...rest}
            >
                {options.map(option => {
                    return (
                        <option key={option.value}
                            value={option.value}
                        >
                            {option.key}
                        </option>
                    )
                })}
            </Field>
            <ErrorMessage name={name} component="small" className="text-red-500" />
        </Fragment>
    )
}

export default Select