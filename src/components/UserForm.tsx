type UserProps = {
    data: {
        name: string,
        email: string
    };
    updateFieldHandler: (key:string, value:string) => void;
}

const UserForm = ({ data, updateFieldHandler }: UserProps) => {
    return (
        <div>
            <div className="form-control">
                <label htmlFor="name">Name:</label>
                <input 
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Enter your name"
                    required
                    value={data.name}
                    onChange={(e) => updateFieldHandler("name", e.target.value)}
                />
            </div>
            <div className="form-control">
                <label htmlFor="email">E-mail:</label>
                <input 
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter your e-mail"
                    required
                    value={data.email}
                    onChange={(e) => updateFieldHandler("email", e.target.value)}
                />
            </div>
        </div>
    )
}

export default UserForm