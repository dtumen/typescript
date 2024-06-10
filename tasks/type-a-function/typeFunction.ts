enum RequestStatus {
    PUBLISHED = 'published',
    DRAFT = 'draft',
    DELETED = 'deleted'
}

type RequestType = {
    topicId: number
    status?: RequestStatus
}

type RespType = {
    question: string
    answer: string
    tags: string[]
    likes: number
    status: RequestStatus
}

async function getFaqs(req: RequestType): Promise<RespType[]> {
    const res = await fetch('/faqs', {
        method: 'POST',
        body: JSON.stringify(req)
    });
    const data: RespType[] = await res.json();
    return data;
}