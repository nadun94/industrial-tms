/*this is used to test the back end and front end of assign supervissor function */
const assert = require('chai').assert;
import chai, {expect} from 'chai';
import matcher from 'chai-react-element';
chai.use(matcher);
const login = require('../../../../client-spm/src/views/assignSupervisor/AssignStudentSupervisorUI');

/*testing if the returned componenets have the  relavent labels*/
expect(<div>Assign ID</div>).to.have.text('Assign ID');
expect(<div> Supervisor ID</div>).to.have.text('Assign ID');
expect(<div> Student ID</div>).to.have.text('Assign ID');

