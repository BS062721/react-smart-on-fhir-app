import 'fhirclient';


console.log('Authorizing User...');
alert('launch');

/**
 * Authorizes the user using SMART authorization flow. 
 */
FHIR.oauth2.authorize({
  client_id: 'a8ba127e-8adf-4f03-9916-efee885a5cab',
  scope: 'patient/Patient.read patient/Observation.read launch online_access openid profile',
  redirect_uri: 'http://localhost:8080/ready',
});
