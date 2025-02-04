interface Problem {
    title: string;
    statusCode: number;
    detail?: string;
    errors?: Record<string, string[]>
}


interface BasRequestError extends Problem {
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


interface Implementing
export type {
    Problem,
    UnauthorizedError,
    BasRequestError,
    ValidationError,
    UnhandledException,
    NetworkError
}

