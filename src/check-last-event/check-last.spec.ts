class CheckLastEventStatus {
    constructor(private readonly loadLastEventReposoitory: LoadLastEventRepository) { }
    async perform(groupId: string): Promise<void> {
        this.loadLastEventReposoitory.groupId = groupId
    }
}


class LoadLastEventRepository {
    groupId?: string
}

describe('CheckLastEvent', () => {
    it('Should get alst event data', async () => {
        const loadLastEventRepository = new LoadLastEventRepository()
        const checkLastEventStatus = new CheckLastEventStatus(loadLastEventRepository)


        await checkLastEventStatus.perform('any_group_id')

        expect(loadLastEventRepository.groupId).toBe('any_group_id')
    })
})