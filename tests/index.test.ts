import CyberP from "../src";

const remote = new CyberP("https://id-web1.raznar.host:8090", "test", "test");

test("Login", (done) => {
    remote.server.login().then((success) => {
        expect(success).toBeTruthy();
        done();
    }).catch((e) => done(e));
});