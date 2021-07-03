import api from "../api";

class EmailService {
    sendEmail(data) {
        return api().post("/email", data)
    }
}

export default new EmailService()
