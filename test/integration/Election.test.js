const { expect, assert } = require('chai');

const Election = artifacts.require('Election');

contract('Election', async () => {

  before(async () => {
    const timestamp = Math.floor(Date.now() / 1000);
    const registrationPeriod = 3600;
    const votingPeriod = 3600;
    const votingDeadline = timestamp + registrationPeriod + votingPeriod;
    this.election = await Election.new(registrationPeriod, votingPeriod, votingDeadline);
  });

  it('registration is already opened', async () => {
    const registrationdOpened = await this.election.isRegistrationOpened.call();
    assert.isTrue(registrationdOpened, 'The registration period must be opened');
  });

  it('voting is still closed', async () => {
    const votingOpened = await this.election.isVotingOpened.call();
    assert.isFalse(votingOpened, 'The voting period must be still closed');
  });
});