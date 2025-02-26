interface Problem {
    title: string;
    status: number;
    detail?: string;
    errors?: Record<string, string[]>;
}


interface BadRequestError extends Problem {
}

interface UnauthorizedError extends Problem {
}

interface ValidationError extends Problem {
}

interface NotFoundError extends Problem {
}

interface UnhandledException extends Problem {
}

interface NetworkError extends Problem {
}

interface NotFoundError extends Problem {

}

type ApiError = BadRequestError | NetworkError | ValidationError | UnauthorizedError | UnhandledException;


export type {
    Problem,
    UnauthorizedError,
    BadRequestError,
    ValidationError,
    UnhandledException,
    NetworkError,
    NotFoundError,
    ApiError
}

