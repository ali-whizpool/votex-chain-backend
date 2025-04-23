import { RelationValidationPipe } from 'src/common/pipes/relation-validation.pipe';

export const allowedEligibilityRelations = []; // e.g. ['customerSubscriptions.service', 'landscaper.user', 'referrer.user', 'referredCustomers.user']

export class EligibilityRelationValidationPipe extends RelationValidationPipe {
  allowedRelations = allowedEligibilityRelations;
}
