function FormInput({ label, name, type, defaultValue }: { label: string; name: string; type: string; defaultValue?: string }) {
    return (
        <label className='form-control gap-1'>
            <span className='label-text'>{label}</span>
            <input type={type} name={name} defaultValue={defaultValue} className='input input-bordered ' />
        </label>
    );
}
export default FormInput;
