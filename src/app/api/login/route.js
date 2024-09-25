// app/api/login/route.js
import { query } from '../../../app/lib/db';
import { NextResponse } from 'next/server';

export async function POST(request) {
  const { email, password } = await request.json();

  try {
    const results = await query(
      'SELECT UserType, FirstName FROM Users WHERE Email = ? AND PasswordHash = ?',
      [email, password]
    );

    if (results.length > 0) {
      return NextResponse.json({ 
        success: true, 
        userType: results[0].UserType,
        name: results[0].FirstName
      });
    } else {
      return NextResponse.json({ success: false, message: 'Credenciales inválidas' }, { status: 401 });
    }
  } catch (error) {
    console.error('Error al iniciar sesión:', error);
    return NextResponse.json({ success: false, message: 'Error al iniciar sesión' }, { status: 500 });
  }
}