-- CreateEnum
CREATE TYPE "GovernmentIdType" AS ENUM ('NATIONAL_ID', 'PASSPORT', 'DRIVING_LICENSE');

-- CreateEnum
CREATE TYPE "BiometricType" AS ENUM ('FINGERPRINT', 'FACIAL');

-- CreateEnum
CREATE TYPE "VerificationMethod" AS ENUM ('AUTOMATIC', 'MANUAL');

-- CreateEnum
CREATE TYPE "VerificationStatus" AS ENUM ('PENDING', 'VERIFIED', 'REJECTED');

-- CreateTable
CREATE TABLE "Voter" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "dateOfBirth" TIMESTAMP(3) NOT NULL,
    "nationality" TEXT NOT NULL,
    "phoneNumber" TEXT NOT NULL,
    "isVerified" BOOLEAN NOT NULL DEFAULT false,
    "verificationStatus" "VerificationStatus" NOT NULL DEFAULT 'PENDING',
    "mfaEnabled" BOOLEAN NOT NULL DEFAULT false,
    "mfaSecret" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Voter_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Address" (
    "id" TEXT NOT NULL,
    "street" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "postalCode" TEXT NOT NULL,
    "voterId" TEXT NOT NULL,

    CONSTRAINT "Address_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "GovernmentId" (
    "id" TEXT NOT NULL,
    "type" "GovernmentIdType" NOT NULL,
    "number" TEXT NOT NULL,
    "expiryDate" TIMESTAMP(3) NOT NULL,
    "voterId" TEXT NOT NULL,

    CONSTRAINT "GovernmentId_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BiometricData" (
    "id" TEXT NOT NULL,
    "type" "BiometricType" NOT NULL,
    "hash" TEXT NOT NULL,
    "voterId" TEXT NOT NULL,

    CONSTRAINT "BiometricData_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "IdentityVerification" (
    "id" TEXT NOT NULL,
    "documentType" "GovernmentIdType" NOT NULL,
    "documentNumber" TEXT NOT NULL,
    "documentImage" TEXT NOT NULL,
    "selfieImage" TEXT NOT NULL,
    "verificationMethod" "VerificationMethod" NOT NULL,
    "verificationProvider" TEXT,
    "status" "VerificationStatus" NOT NULL DEFAULT 'PENDING',
    "voterId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "IdentityVerification_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EligibilityVerification" (
    "id" TEXT NOT NULL,
    "ageVerified" BOOLEAN NOT NULL DEFAULT false,
    "citizenshipVerified" BOOLEAN NOT NULL DEFAULT false,
    "residencyVerified" BOOLEAN NOT NULL DEFAULT false,
    "duplicateCheck" BOOLEAN NOT NULL DEFAULT false,
    "status" "VerificationStatus" NOT NULL DEFAULT 'PENDING',
    "voterId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "EligibilityVerification_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Vote" (
    "id" TEXT NOT NULL,
    "voterId" TEXT NOT NULL,
    "candidate" TEXT NOT NULL,
    "timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Vote_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Voter_email_key" ON "Voter"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Address_voterId_key" ON "Address"("voterId");

-- CreateIndex
CREATE UNIQUE INDEX "GovernmentId_voterId_key" ON "GovernmentId"("voterId");

-- CreateIndex
CREATE UNIQUE INDEX "BiometricData_voterId_key" ON "BiometricData"("voterId");

-- CreateIndex
CREATE UNIQUE INDEX "IdentityVerification_voterId_key" ON "IdentityVerification"("voterId");

-- CreateIndex
CREATE UNIQUE INDEX "EligibilityVerification_voterId_key" ON "EligibilityVerification"("voterId");

-- AddForeignKey
ALTER TABLE "Address" ADD CONSTRAINT "Address_voterId_fkey" FOREIGN KEY ("voterId") REFERENCES "Voter"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GovernmentId" ADD CONSTRAINT "GovernmentId_voterId_fkey" FOREIGN KEY ("voterId") REFERENCES "Voter"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BiometricData" ADD CONSTRAINT "BiometricData_voterId_fkey" FOREIGN KEY ("voterId") REFERENCES "Voter"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "IdentityVerification" ADD CONSTRAINT "IdentityVerification_voterId_fkey" FOREIGN KEY ("voterId") REFERENCES "Voter"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EligibilityVerification" ADD CONSTRAINT "EligibilityVerification_voterId_fkey" FOREIGN KEY ("voterId") REFERENCES "Voter"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Vote" ADD CONSTRAINT "Vote_voterId_fkey" FOREIGN KEY ("voterId") REFERENCES "Voter"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
