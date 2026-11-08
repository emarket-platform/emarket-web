/*
    Назначение: показать пользователю, что у него недостаточно прав для выполнения операции.
    Например, пользователь авторизован, но пытается открыть административную страницу, для которой у него нет соответствующей роли.
    Важно: 403 не означает, что пользователь не авторизован.
    Для неавторизованного пользователя обычно используется 401 Unauthorized.
*/
import { Link } from 'react-router-dom';

export function ForbiddenPage() {
    return (
        <section>
            <h1>403 - Forbidden</h1>

            <p>
                You don't have permission to access this resource.
            </p>

            <Link to="/">Go to Home</Link>
        </section>
    );
}