import api from "../api";

class EmailService {
    sendEmail() {
        return api().get("/email")
    }
}

export default new EmailService()
