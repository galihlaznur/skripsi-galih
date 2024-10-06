import transactionSchema from "../models/transactionSchema.js";

export const handlePayment = async (req, res) => {
    try {
        const body = req.body;
        const orderId = body.order_id;
        
        onsole.log("Received Payment Notification:", body);
        console.log("Order ID:", orderId);
        console.log("Transaction Status:", body.transaction_status);

        switch (body.transaction_status) {
            case "capture":
            case "settlement":
                await transactionSchema.findByIdAndUpdate(orderId, {
                    status: "success",
                })
                break;

            case "deny":
            case "cancel":
            case "expire":
            case "failure":
                await transactionSchema.findByIdAndUpdate(orderId, {
                    status: "failed",
                })
                break;
        
            default:
                break;
        }

        return res.json({
            message: 'Handle Payment Success',
            data: {}
        });
    } catch (error) {
        console.log(error);

    return res.status(500).json({
        message: 'Internal Server Error'
    })
    }
}