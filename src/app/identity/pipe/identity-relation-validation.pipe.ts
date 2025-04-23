import { RelationValidationPipe } from 'src/common/pipes/relation-validation.pipe';

export const allowedIdentityRelations = []; // e.g. ['customerSubscriptions.service', 'landscaper.user', 'referrer.user', 'referredCustomers.user']

export class IdentityRelationValidationPipe extends RelationValidationPipe {
  allowedRelations = allowedIdentityRelations;
}
