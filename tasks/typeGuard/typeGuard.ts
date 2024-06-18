interface IPayment {
    sum: number;
    from: number;
    to: number;
}

enum PaymentStatus {
    Success = 'success',
    Failed = 'failed',
}

interface IPaymentRequest extends IPayment { }

interface IDataSuccess extends IPayment {
    databaseId: number;
}

interface IDataFailed {
    errorMessage: string;
    errorCode: number;
}

interface IResponseSuccess {
    status: PaymentStatus.Success;
    data: IDataSuccess;
}

interface IResponseFailed {
    status: PaymentStatus.Failed;
    data: IDataFailed;
}

function isSuccess(statusPayment: PaymentStatus): statusPayment is PaymentStatus.Success {
    return statusPayment === PaymentStatus.Success;
}

function getIdFromData(response: IResponseSuccess | IResponseFailed) {
    if (isSuccess(response.status)) {
        return response.data
    } else {
        throw new Error(`response is failed: ${response.status}`)
    }
}

