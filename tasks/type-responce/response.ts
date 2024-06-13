// 1:
enum PaymentStatus {
    SUCCESS = "success",
    FAILED = "failed"
}

interface IPayment {
    sum: number,
    from: number,
    to: number
}

// 2:
interface IDataSuccess extends IPayment {
    databaseId: number
}

interface IDataFailed {
    errorMessage: string
    errorCode: number
}
// 3:
interface IResponseSuccess {
    status: PaymentStatus.SUCCESS
    data: IDataSuccess
}

interface IResponseFailed {
    status: PaymentStatus.FAILED
    data: IDataFailed
}