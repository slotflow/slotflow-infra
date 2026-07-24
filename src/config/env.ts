import { Validator } from "../utils/validator";

const validator = new Validator();

export const kafkaConfig = {
  clientId: validator.requireEnv("KAFKA_CLIENT_ID"),
  brokers: [
    validator.requireEnv("KAFKA_BROKER_1"),
    // validator.requireEnv("KAFKA_BROKER_2"),
    // validator.requireEnv("KAFKA_BROKER_3"),
  ],

  topics: {
    // topics to create by admin
    sendOtp: validator.requireEnv("KAFKA_SEND_OTP"),
    registerSuccess: validator.requireEnv("KAFKA_REGISTER_SUCCESS"),
    passwordReset: validator.requireEnv("KAFKA_PASSWORD_RESET"),
    adminProviderReview: validator.requireEnv("KAFKA_ADMIN_PROVIDER_REVIEW"),
    accountBlockStatus: validator.requireEnv("KAFKA_ACCOUNT_BLOCK_STATUS"),
    accountTrustStatus: validator.requireEnv("KAFKA_ACCOUNT_TRUST_STATUS"),
    providerAppointmentStatusForUser: validator.requireEnv("KAFKA_PROVIDER_APPOINTMENT_STATUS_FOR_USER"),
    providerAppointmentStatusForProvider: validator.requireEnv("KAFKA_PROVIDER_APPOINTMENT_STATUS_FOR_PROVIDER"),
    appConnect: validator.requireEnv("KAFKA_APP_CONNECT"),
    providerTrialSubscription: validator.requireEnv("KAFKA_PROVIDER_TRIAL_SUBSCRIPTION"),
    googleCalendarSuccess: validator.requireEnv("KAFKA_GOOGLE_CALENDAR_SUCCESS"),
    googleCalendarFailed: validator.requireEnv("KAFKA_GOOGLE_CALENDAR_FAILED"),
    providerSubscriptionPaymentSuccess: validator.requireEnv("KAFKA_PROVIDER_SUBSCRIPTION_PAYMENT_SUCCESS"),
    createGoogleCalendarEvent: validator.requireEnv("KAFKA_GOOGLE_CALENDAR_EVENT_CREATE"),
    updateGoogleCalendarEvent: validator.requireEnv("KAFKA_GOOGLE_CALENDAR_EVENT_UPDATE"),
    planSubscribed: validator.requireEnv("KAFKA_PLAN_SUBSCRIBED"),
    slotBooked: validator.requireEnv("KAFKA_SLOT_BOOKED"),
    userBookingPaymentSuccess: validator.requireEnv("KAFKA_USER_BOOKING_PAYMENT_SUCCESS"),
    gotAnAppointment: validator.requireEnv("KAFKA_GOT_AN_APPOINTMENT"),
    stripeAccountCreated: validator.requireEnv("KAFKA_STRIPE_ACCOUNT_CREATED"),
    stripeCustomerCreated: validator.requireEnv("KAFKA_STRIPE_CUSTOMER_CREATED"),
    passwordUpdate: validator.requireEnv("KAFKA_PASSWORD_UPDATE"),
    stripeAccountLinked: validator.requireEnv("KAFKA_STRIPE_ACCOUNT_LINKED"),
    stripeAccountStatusUpdated: validator.requireEnv("KAFKA_STRIPE_ACCOUNT_STATUS_UPDATED"),
    dlqTopic: validator.requireEnv("KAFKA_DLQ_TOPIC"),
  },
};