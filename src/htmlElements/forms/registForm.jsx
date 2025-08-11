import React, { useState } from "react";
import "../../CSS/register.css";

function RegistForm() {
    const [form, setForm] = useState({ username: "", email: "", password: "" });
    const [errors, setErrors] = useState({});
    const [submitting, setSubmitting] = useState(false);
    const [success, setSuccess] = useState(false);

    const validate = () => {
        const newErrors = {};
        if (form.username.trim().length < 3) newErrors.username = "Имя слишком короткое.";
        if (!/\S+@\S+\.\S+/.test(form.email)) newErrors.email = "Некорректный email.";
        if (form.password.length < 6) newErrors.password = "Минимум 6 символов.";
        return newErrors;
    };

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
        setErrors({});
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        setSubmitting(true);
        try {
            await new Promise(resolve => setTimeout(resolve, 1500));
            setSuccess(true);
        } catch (err) {
            console.error("Ошибка отправки:", err);
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <div className="form-container">
            <h2>Регистрация</h2>
            {success ? (
                <p style={{ color: "green" }}>Регистрация прошла успешно!</p>
            ) : (
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="username"
                        placeholder="Имя пользователя"
                        value={form.username}
                        onChange={handleChange}
                    />
                    {errors.username && <p className="error">{errors.username}</p>}

                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={form.email}
                        onChange={handleChange}
                    />
                    {errors.email && <p className="error">{errors.email}</p>}

                    <input
                        type="password"
                        name="password"
                        placeholder="Пароль"
                        value={form.password}
                        onChange={handleChange}
                    />
                    {errors.password && <p className="error">{errors.password}</p>}

                    <button className="registration-button" type="submit" disabled={submitting}>
                        {submitting ? "Отправка..." : "Зарегистрироваться"}
                    </button>
                </form>
            )}
        </div>
    );
}

export default RegistForm;
