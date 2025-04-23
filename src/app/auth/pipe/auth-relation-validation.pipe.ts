import { RelationValidationPipe } from 'src/common/pipes/relation-validation.pipe';

export const allowedAuthRelations = []; // e.g. ['customerSubscriptions.service', 'landscaper.user', 'referrer.user', 'referredCustomers.user']

export class AuthRelationValidationPipe extends RelationValidationPipe {
  allowedRelations = allowedAuthRelations;
}
