import dotenv from "dotenv";
dotenv.config();

import { Validator } from "../utils/validator";

const validator = new Validator();

export const kafkaConfig = {
  clientId: validator.requireEnv("KAFKA_CLIENT_ID"),
   brokers: [
    validator.requireEnv("KAFKA_BROKER_1"),
    validator.requireEnv("KAFKA_BROKER_2"),
    validator.requireEnv("KAFKA_BROKER_3"),
  ],

  topics: {
    // topics to create by admin
    sendOtp: validator.requireEnv("KAFKA_SEND_OTP"),
    registerSuccess: validator.requireEnv("KAFKA_REGISTER_SUCCESS"),
    passwordReset: validator.requireEnv("KAFKA_PASSWORD_RESET"),
    adminProviderReview: validator.requireEnv("KAFKA_ADMIN_PROVIDER_REVIEW"),
    accountBlockStatus: validator.requireEnv("KAFKA_ACCOUNT_BLOCK_STATUS"),
    accountTrustStatus: validator.requireEnv("KAFKA_ACCOUNT_TRUST_STATUS"),
    providerAppointmentStatus: validator.requireEnv("KAFKA_PROVIDER_APPOINTMENT_STATUS"),
    appConnect: validator.requireEnv("KAFKA_APP_CONNECT"),
    providerTrialSubscription: validator.requireEnv("KAFKA_PROVIDER_TRIAL_SUBSCRIPTION"),
  },
};