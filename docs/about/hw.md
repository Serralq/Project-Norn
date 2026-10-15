``` yaml
openapi: 3.0.3
info:
  title: Movie Theater Seat Reservation API
  version: 1.0.0
  description: >-
    Customers can reserve, view, and cancel reservation before the actual purchase.
    Reservations are held for the customer for a <X> minutes. The seats can become
    unavailible between reservatino and purchase.
paths:
  /reservations:
    post:
      summary: Reserve selected seats for a showtime
      requestBody:
        required: true
        content:
          application/json:
            schema:
              type: object
              required: [showtimeId, seatIds]
              properties:
                showtimeId:
                  type: string
                  example: showtime-101
                seatIds:
                  type: array
                  minItems: 1
                  uniqueItems: true
                  items:
                    type: string
                  example: [A5, A6]
      responses:
        '201':
          description: Seats successfully reserved; totalPrice is in USD.
          content:
            application/json:
              example:
                reservationId: reservation-501
                reservedSeatId: [A5, A6]
                totalPrice: 25.00
                transacationStartTime: '2026-10-30T18:00:00Z'
        '400':
          description: Missing or invalid showtimeId or seatIds.
        '404':
          description: Showtime or seat not found.
        '409':
          description: Selected seats are unavailable; no reservation was created.
          content:
            application/json:
              example:
                unavailableSeatIds: [A5]
                errorCode: SEATS_UNAVAILABLE
                errorMessage: One or more selected seats are unavailable.
  /reservations/{reservationId}:
    parameters:
      - name: reservationId
        in: path
        required: true
        description: Identifier returned when the reservation was created.
        schema:
          type: string
        example: reservation-501
    get:
      summary: Retrieve a seat reservation
      responses:
        '200':
          description: Reservation details; totalPrice is in USD.
          content:
            application/json:
              example:
                reservationId: reservation-501
                showtimeId: showtime-101
                reservedSeatId: [A5, A6]
                totalPrice: 25.00
                transacationStartTime: '2026-10-30T18:00:00Z'
                status: active
        '404':
          description: Reservation not found.
    delete:
      summary: Cancel a reservation and release its seats
      responses:
        '204':
          description: Reservation cancelled or already expired or cancelled. No response body.
        '404':
          description: Reservation not found.
        '409':
          description: Reservation cannot be cancelled because tickets were already purchased.

```
