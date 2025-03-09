import styles from "./styles/Input.module.css";
import { forwardRef } from "react";

export type InputType = "text" | "email" | "password";

interface InputProps {
	text: string;
	inputId: string;
	name: string;
	placeholder: string;
	required?: boolean;
	ref?: any;
}

interface InputTextProps extends InputProps {
	type: InputType;
	value?: string;
}

interface InputTextReadOnlyProps extends InputTextProps {
	value: string;
}

interface InputNumberProps extends InputProps {
	negative: boolean;
	value?: number;
}

interface InputBirthdayProps {
	value?: string;
}

interface InputGenderProps {
	value?: string;
}

export const InputText = forwardRef<HTMLInputElement, InputTextProps>(
	({ type, text, inputId, name, placeholder, required, value }: InputTextProps, ref) => {
		return (
			<div className={styles.inputStyle}>
				<label htmlFor={name} className="labelText">
					{text}
				</label>
				<input
					type={type}
					id={inputId}
					name={name}
					className="formsTextFont"
					placeholder={placeholder}
					required={required}
					ref={ref}
					defaultValue={value}
				/>
			</div>
		);
	}
);

export function InputTextReadOnly({
	type,
	text,
	inputId,
	name,
	placeholder,
	required,
	ref,
	value,
}: InputTextReadOnlyProps) {
	return (
		<div className={styles.inputStyle}>
			<label htmlFor={name} className="labelText">
				{text}
			</label>
			<input
				type={type}
				id={inputId}
				name={name}
				className="formsTextFont"
				value={value}
				placeholder={placeholder}
				ref={ref}
				readOnly={true}
			/>
		</div>
	);
}



export function InputNumber({
	text,
	inputId,
	name,
	placeholder,
	negative,
	required,
	value,
}: InputNumberProps) {

	if (negative) {
		return (
			<div className={styles.inputStyle}>
				<label htmlFor={name} className="labelText">
					{text}
				</label>
				<input
					type="number"
					id={inputId}
					name={name}
					className="formsTextFont"
					placeholder={placeholder}
					required={required}
					defaultValue={value}
				/>
			</div>
		);
	}

	return (
		<div className={styles.inputStyle}>
			<label htmlFor={name} className="labelText">
				{text}
			</label>
			<input
				type="number"
				id={inputId}
				name={name}
				className="formsTextFont"
				placeholder={placeholder}
				required={required}
				min={0}
				defaultValue={value}
			/>
		</div>
	);
}


export function InputGender({ value = "" }: InputGenderProps) {
	return (
		<div className={styles.inputStyle}>
			<label htmlFor="gender" className="labelText">
				Gender
			</label>
			<select className="bodyTextFont" name="gender" id="gender" required>
				{(value == 'male') ? 
					<>
					<option value="male" selected>Male</option>
					<option value="female">Female</option>
					<option value="nosay">Prefer not to say</option>
					</>
					: ((value == 'female') ?
					<>
					<option value="male">Male</option>
					<option value="female" selected>Female</option>
					<option value="nosay">Prefer not to say</option>
					</>
					:
					<>
					<option value="male">Male</option>
					<option value="female">Female</option>
					<option value="nosay" selected>Prefer not to say</option>
					</>
					)
				}
			</select>
		</div>
	);
}				

export function InputBirthday({ value = "" }: InputBirthdayProps) {

	const birthday = value.split("T")[0];

	return (
		<div className={styles.inputStyle}>
			<label htmlFor="birthdate" className="labelText">
				Date of Birth
			</label>
			<input type="date" name="birthdate" id="birthdate" defaultValue={birthday} required />
		</div>
	);
}