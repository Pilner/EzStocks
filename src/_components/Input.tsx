import styles from "./styles/Input.module.css";

interface Option {
    value: string;
    label: string;
}

interface InputProps {
    type: 'text' | 'email' | 'password' | 'select' | 'date';
    name: string;
    label: string;
    options?: Option[];
    placeholder?: string;
    minLength?: number;
    maxLength?: number;
    required?: boolean;
}

export default function Input({
    type,
    name,
    label,
    options,
    placeholder,
    minLength,
    maxLength,
    required = false,}: InputProps) {
	return (
        <div className={styles.inputContainer}>
            <label className="formsTextFont" htmlFor={name}>{label}</label>
            {type === 'select' ? (
                // Render a select input if the type is 'select'
                <select className={styles.inputSelect} id={name} name={name} required={required} defaultValue="default">
                <option value="default" disabled>
                    {placeholder || 'Select an option'}
                </option>
                {options && options.map((option) => (
                    <option key={option.value} value={option.value}>
                    {option.label}
                    </option>
                ))}
                </select>

            ) : type === 'date' ? (
                <input
                    className={styles.inputDate}
                    type="date"
                    id={name}
                    name={name}
                    required={required}
                />
              ) : (
                // Render a standard input for other types
                <input
                    type={type}
                    id={name}
                    name={name}
                    placeholder={placeholder}
                    required={required}
                    minLength={minLength}
                    maxLength={maxLength}
                />
            )}
        </div>
    );
};
